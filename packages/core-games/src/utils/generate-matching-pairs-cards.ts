import { CardCategory } from "@/constant/card-category";
import { CardSize } from "@/constant/card-size";
import { Card, CardId, CardStatus } from "@/types/card";
import { getGridSize } from "@/utils/get-grid-size";
import { preFetchImage } from "@/utils/pre-fetch-image";
import { UnsplashPhoto } from "@/types/unsplash";

interface MatchingPairsCardsGeneratorProps {
  cardSize: CardSize;
  cardCategory: CardCategory;
}

const UNSPLASH_ACCESS_KEY = "cHF29B1AXwTcJ6n_j2MYnG41M-B_TuiYl3BZD5oZu_U";
const BASE_URL = "https://api.unsplash.com/";

export const generateMatchingPairsCards = async ({
  cardSize,
  cardCategory,
}: MatchingPairsCardsGeneratorProps): Promise<Record<CardId, Card>> => {
  const { rows, columns } = getGridSize(cardSize);
  const totalCardPairs = (rows * columns) / 2;

  const res = await fetch(
    `${BASE_URL}/photos/?query=${cardCategory}&per_page=${totalCardPairs}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Unsplash API Error:", res.status, res.statusText, errorData);
    throw new Error(`Unsplash API request failed with status ${res.status}`);
  }

  const photos: UnsplashPhoto[] = await res.json();

  const cardsArray: Card[] = [];

  for (const photo of photos) {
    const imageSrc = photo.urls.regular;
    preFetchImage(imageSrc);

    // Create two cards with the same image for a matching pair
    cardsArray.push({
      id: crypto.randomUUID(),
      sourceId: photo.id,
      status: CardStatus.HIDDEN,
      src: imageSrc,
    });
    cardsArray.push({
      id: crypto.randomUUID(),
      sourceId: photo.id,
      status: CardStatus.HIDDEN,
      src: imageSrc,
    });
  }

  // Shuffle the cardsArray using Fisher-Yates algorithm
  for (let i = cardsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
  }

  // Convert the shuffled array back to an object format
  const cards: Record<CardId, Card> = {};
  for (const card of cardsArray) {
    cards[card.id] = card;
  }

  return cards;
};

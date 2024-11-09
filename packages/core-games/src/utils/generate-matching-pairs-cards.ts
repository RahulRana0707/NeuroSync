import { CardCategory } from "@/constant/card-category";
import { CardSize } from "@/constant/card-size";
import { Card, cardId, CardStatus } from "@/types/card";
import { getGridSize } from "./get-grid-size";

interface MatchingPairsCardsGeneratorProps {
  cardSize: CardSize;
  cardCategory: CardCategory;
}

const UNSPLASH_ACCESS_KEY = "cHF29B1AXwTcJ6n_j2MYnG41M-B_TuiYl3BZD5oZu_U";
const BASE_URL = "https://api.unsplash.com/";

export const generateMatchingPairsCards = async ({
  cardSize,
  cardCategory,
}: MatchingPairsCardsGeneratorProps): Promise<Record<cardId, Card>> => {
  const { rows, columns } = getGridSize(cardSize);
  const totalCardPairs = (rows * columns) / 2;

  return {
    OIu8IKuhc0IEvOaymyuSE: {
      id: "OIu8IKuhc0IEvOaymyuSE",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1566345984367-fa2ba5cedc17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    xC7QADRiCU_ikJdELwFHr: {
      id: "xC7QADRiCU_ikJdELwFHr",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1566345984367-fa2ba5cedc17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    s1IbJH3paYfK3FRiCgZzl: {
      id: "s1IbJH3paYfK3FRiCgZzl",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    i6frV_Gv3QWmqi3PGtJmG: {
      id: "i6frV_Gv3QWmqi3PGtJmG",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    "29kii5Vwyc-jA1e_z5FeU": {
      id: "29kii5Vwyc-jA1e_z5FeU",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1498590880827-3f79fdcd7fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    "PXIUTuiL-GCzPYPyNMG0P": {
      id: "PXIUTuiL-GCzPYPyNMG0P",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1498590880827-3f79fdcd7fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    "-TVtjn5sLOfdlwyEmkZlb": {
      id: "-TVtjn5sLOfdlwyEmkZlb",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1542785291-fe3faea39066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    "tijxIKra0CSf-pTzPMe5z": {
      id: "tijxIKra0CSf-pTzPMe5z",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1542785291-fe3faea39066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    YvQ41NFOhfLceMiPcyQaA: {
      id: "YvQ41NFOhfLceMiPcyQaA",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1457364847821-58861bbda116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    w13Hnu10yJi2znJW87XGB: {
      id: "w13Hnu10yJi2znJW87XGB",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1457364847821-58861bbda116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    rIotFNFvvkq1rewoeM_kd: {
      id: "rIotFNFvvkq1rewoeM_kd",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1504238624541-bca0f332da07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    vLKfwLdk0dIKJTbWppYQm: {
      id: "vLKfwLdk0dIKJTbWppYQm",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1504238624541-bca0f332da07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    TjFkUHjQ1HOvQrVpGvNz8: {
      id: "TjFkUHjQ1HOvQrVpGvNz8",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    "8y42L1vKJZVKWNkQpq5lM": {
      id: "8y42L1vKJZVKWNkQpq5lM",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    qhFuIpdsyWs6kcU6a6KBK: {
      id: "qhFuIpdsyWs6kcU6a6KBK",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1512950050685-b1d4ae63d2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    "h2ydEGf7DoMiR_Cj-g24Y": {
      id: "h2ydEGf7DoMiR_Cj-g24Y",
      status: CardStatus.HIDDEN,
      src: "https://images.unsplash.com/photo-1512950050685-b1d4ae63d2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU3MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjYzMjU2MDR8&ixlib=rb-4.0.3&q=80&w=1080",
    },
  };

  const res = await fetch(
    `${BASE_URL}api/images?category=${cardCategory}&count=${totalCardPairs}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();

  console.log(data, "data");

  return {};
};

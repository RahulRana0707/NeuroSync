enum CardStatus {
  HIDDEN = "HIDDEN",
  SELECTED = "SELECTED",
  MATCHED = "MATCHED",
}

type cardId = string;

type TCardStatus = keyof typeof CardStatus;

type Card = {
  id: cardId;
  src: string;
  status: CardStatus;
};

export type { cardId, Card, TCardStatus };
export { CardStatus };

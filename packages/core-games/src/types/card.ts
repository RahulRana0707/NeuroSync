enum CardStatus {
  HIDDEN = "HIDDEN",
  SELECTED = "SELECTED",
  MATCHED = "MATCHED",
}

type CardId = string;

type TCardStatus = keyof typeof CardStatus;

type Card = {
  id: CardId;
  sourceId: string;
  src: string;
  status: CardStatus;
};

export type { CardId, Card, TCardStatus };
export { CardStatus };

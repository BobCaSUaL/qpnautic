
export declare type QuizId = number

export declare type QuizOptionId = number

export declare interface QuizOption {
  id: QuizOptionId,
  text: string,
}

export declare interface Quiz {
  id: QuizId,
  question: string,
  hasPicture: false,
  correctOption: 0 | 1 | 2,
  options: [QuizOption, QuizOption, QuizOption],
}

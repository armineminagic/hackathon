export interface Root {
    processed_question: string
    has_drug: boolean
    question: string
    topik_entities: any[]
    topik_glossary_entity: string
    sentiment_label: string
    topik_preventive_entity: string
    confidences: Confidences
    prediction: string
    drug_names: [string, number][]
    version: number
    topik_entity_values: string
    vader_sentiment: number
    sentiment_confidences: SentimentConfidences
    confidences_sorted: [string, number][]
  }
  
  export interface Confidences {
    clinical: number
    general_benefits: number
    dental: number
    health_optimization: number
    cafewell: number
    out_of_benefits: number
  }
  
  export interface SentimentConfidences {
    positive: number
    neutral: number
    negative: number
  }
  
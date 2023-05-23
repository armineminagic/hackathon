export interface Root {
    userId: string
    sessionId: string
    text: string
    data: Data
  }
  
  export interface Data {
    key: string
  }
export interface IConItem{
    element: () => JSX.Element
    sel: number
}
export interface IMenu{
    select: number
}
export interface IButton{
    text: string
    mode: boolean
    style?: {
        [key: string]: any;
    };
    handler?:() => void
}
export interface IStyleItem{
    name:string
    activ: boolean
}
export interface IReqItem{
    branch:string
    date:string
    text:string
    template:string
    loadLink?:string
}

export interface IHistoryPage{
    reqItem:IReqItem[]
}

export interface IMessage {
    author: string;
    message: string;
    time: string;
    point: number;
  }
  
  export interface IChat {
    index: number;
    name: string;
    messages: IMessage[];
  }
  
  export interface IAddMessage {
    message: string;
  }
  
  export interface ISystemAnswer {
    answer: string;
  }
  
  
  export interface IOptionCompProps {
    chatIndex: number;
    newData: string;
  }
  
  export interface IEvent {
    option:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>;
  }
  
  export interface IStarProps {
    messageIndex: number;
    filled: boolean;
    onHover: (starIndex: number) => void;
    onLeave: () => void;
    starIndex: number;
  }
  
  export interface IStarRatingProps {
    totalStars: number;
    messageIndex: number;
    point: number;
  }
  
  export interface ISendPoint {
    point: number;
    messageIndex: number;
  }
  export interface IGetRes {
    data: string[];
  }
  export interface ISendMessageReq {
    message: string;
    output_size: number;
    style: string;
    tonality: number;
    impact: number;
  }
  export interface ISendAnswerReq {
    message: string;
    answer: string;
    style: string;
    tonality: number;
    impact: number;
    mark: number;
  }
  export interface IGenerateTabNameReq {
    message: string;
  }
  export interface IExportReq {
    message: string;
    answer: string;
    file_format: string;
  }
  
  export interface IInfoPageProps {
    child: () => JSX.Element;
  }
  
  export interface IStyleDescription {
    data: { [key: string]: string };
  }
  
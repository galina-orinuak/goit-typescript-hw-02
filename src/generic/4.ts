/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {

  }
}

interface ComponentProps {
  title: string;
}

class Page extends Component<ComponentProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};
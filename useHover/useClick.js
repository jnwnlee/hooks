export const useClick = (onClick) => {
    const element = useRef(); //works like getElementById
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      // corresponds to componentWillUnmount
      return () => {
        // get rid of EventListener when component is not mounted
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []); //componentDidMount componentDidUpdate
    return element;
  };
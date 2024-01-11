const useLink = () => {
  const parseUrl = (url: string): string => {
    return new URL(url).host.replace('www.', '');
  };

  return {parseUrl};
};

export default useLink;

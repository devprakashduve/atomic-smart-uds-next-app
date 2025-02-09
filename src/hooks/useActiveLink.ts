import { useState, useEffect } from 'react';

const useActiveLink = (initialLink: string | null = null) => {
  const [activeLink, setActiveLink] = useState<string | null>(() => {
    return sessionStorage.getItem('activeLink') || initialLink;
  });

  useEffect(() => {
    if (activeLink) {
      sessionStorage.setItem('activeLink', activeLink);
    } else {
      sessionStorage.removeItem('activeLink');
    }
  }, [activeLink]);

  return [activeLink, setActiveLink] as const;
};

export default useActiveLink;

import me from '../app/avatar.jpg';

export const name = 'Lee Robinson';
export const avatar = me;
export const about = () => {
  return (
    <>
      Hey, I'm Lee. I'm the <b>VP of Developer Experience at Vercel</b> where my
      team helps developers build a faster web.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I'm a Next.js contributor and help lead our open-source communities. I'm
      passionate about frontend development and have created courses on React,
      Next.js, and web development. I'm an advisor and investor in early stage
      startups.
    </>
  );
};

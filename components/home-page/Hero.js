import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/azat.jpg"
          alt="An image showing Azat"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I am Azat</h1>
      <p>
        I blog about web development - especially frontend freamworks like React{' '}
      </p>
    </section>
  );
};

export default Hero;

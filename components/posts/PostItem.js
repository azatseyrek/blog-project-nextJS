import Image from 'next/image';
import Link from 'next/link';
import classes from './postItem.module.css';

const PostItem = (props) => {
  const {title, image, excerpt, date, slug} = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div classname={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p> {excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;

import NextHead from "next/head";
import { type FC, Fragment } from "react";

interface HeadProps {
  title: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const Head: FC<HeadProps> = ({
  title = "Fédération Française de Roundnet - Site Officiel",
  description,
  url,
  ogImage,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      {description && (
        <Fragment>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Fragment>
      )}
      <meta property="og:title" content={title} />
    </NextHead>
  );
};

export default Head;

import { Container } from "@mui/material";
import { type FC, Fragment } from "react";
import { getDocuments } from "../../helpers/db";

import {
  CrossingItems,
  Error as ErrorUI,
  PageTitle,
} from "../../components/ui";
import type { Partner } from "../../models/collections/Partners";

const getPartners = async () => {
  try {
    return await getDocuments<Partner>({ collection: "partners" });
  } catch (err) {
    const { message } = err as Error;
    return message;
  }
};

const PartnersPage: FC = async () => {
  const data = await getPartners();
  return (
    <Fragment>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <PageTitle title='Partenaires officiels' />
      </Container>
      <Container maxWidth='md' sx={{ py: 4 }}>
        {typeof data === "string" ? (
          <ErrorUI message={data} />
        ) : (
          <CrossingItems items={data} height={300} imageFit='contain' />
        )}
      </Container>
    </Fragment>
  );
};

export const revalidate = 60;
export default PartnersPage;

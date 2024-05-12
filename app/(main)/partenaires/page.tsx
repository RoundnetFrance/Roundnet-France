import { Container } from "@mui/material";
import { type FC, Fragment } from "react";
import { getDocuments } from "../../../helpers/db";

import {
  CrossingItems,
  Error as ErrorUI,
  PageTitle,
} from "../../../components/ui";
import type { Partner } from "../../../models/collections/Partners";

const getPartners = async () => {
  try {
    return await getDocuments<Partner>({ collection: "partners" });
  } catch (err) {
    const { message } = err as Error;
    return { error: message };
  }
};

const PartnersPage: FC = async () => {
  const partners = await getPartners();
  return (
    <Fragment>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <PageTitle title='Partenaires officiels' />
      </Container>
      <Container maxWidth='md' sx={{ py: 4 }}>
        {"error" in partners ? (
          <ErrorUI message={partners.error} />
        ) : (
          <CrossingItems
            items={partners}
            height={300}
            imageFit='contain'
            roundedItems
            roundedEverywhere
          />
        )}
      </Container>
    </Fragment>
  );
};

export const revalidate = 3600;
export default PartnersPage;

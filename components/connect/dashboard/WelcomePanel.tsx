"use client";

import { Hand, PlusCircle } from "lucide-react";
import { CardContent, CardHeader } from "../../../@/components/ui/card";
import { Card, Typography } from "../../ui-v2/";
import { useEffect, useState } from "react";

export const WelcomePanel = () => {
  const [isPanelDismissed, setIsPanelDismissed] = useState(true);

  const dismissPanel = () => {
    setIsPanelDismissed(true);
    localStorage.setItem("isConnectPanelDismissed", "1");
  };

  useEffect(() => {
    const isDismissed = localStorage.getItem("isConnectPanelDismissed");
    setIsPanelDismissed(isDismissed === "1");
  }, []);

  if (isPanelDismissed) return null;

  return (
    <Card className='p-8 relative'>
      <CardHeader className='mb-4 flex justify-between '>
        <div className='flex gap-4 items-center pr-4'>
          <Hand size={32} className='text-blue-500' />
          <Typography variantStyle='h3' className='text-blue-500'>
            Bienvenue sur Roundnet France Connect
          </Typography>
        </div>
        <PlusCircle
          className='rotate-45 absolute right-4 top-4 cursor-pointer'
          onClick={dismissPanel}
        />
      </CardHeader>
      <CardContent>
        <Typography>
          Ce service vous est proposé par Roundnet France afin de suivre vos
          informations de Club. Il s’agit d’une première version qui vous permet
          de faire les choses suivantes :
        </Typography>
        <Typography variant='ul' className='mb-0'>
          <li>
            Contrôler les informations disponibles sur le site roundnetfrance.fr
          </li>
          <li>Visualiser vos adhérents</li>
          <li>
            Gérer vos tournois pour les faire apparaitre directement sur le site
          </li>
        </Typography>
      </CardContent>
    </Card>
  );
};

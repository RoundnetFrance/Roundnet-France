"use client";

import { Hand, PlusCircle } from "lucide-react";
import { CardContent, CardHeader } from "../../../@/components/ui/card";
import { Button, Card, Typography } from "../../ui-v2/";
import { useEffect, useState } from "react";

export const WelcomePanel = () => {
  const [isPanelDismissed, setIsPanelDismissed] = useState(true);
  const [isPanelClosed, setIsPanelClosed] = useState(false);

  const dismissPanel = () => {
    setIsPanelDismissed(true);
    localStorage.setItem("isConnectPanelDismissed", "1");
  };

  useEffect(() => {
    const isDismissed = localStorage.getItem("isConnectPanelDismissed");
    setIsPanelDismissed(isDismissed === "1");
  }, []);

  if (isPanelDismissed || isPanelClosed) return null;

  return (
    <Card className='p2 md:p-8 relative' theme='light-primary'>
      <CardHeader className='flex justify-between '>
        <div className='flex gap-4 items-center pr-4'>
          <Typography variantStyle='h2' className='text-indigo-500'>
            👋 Bienvenue sur Roundnet France Connect
          </Typography>
        </div>
        <PlusCircle
          className='rotate-45 absolute right-4 top-8 cursor-pointer min-w-16'
          onClick={() => {
            setIsPanelClosed(true);
          }}
        />
      </CardHeader>
      <CardContent className='space-y-8'>
        <Typography>
          Ce service vous est proposé par Roundnet France afin de suivre vos
          informations de Club. Il s’agit d’une première version qui vous permet
          de faire les choses suivantes :
        </Typography>
        <Typography variant='ul' className='mb-0'>
          <li className='list-disc'>
            Contrôler les informations disponibles sur le site roundnetfrance.fr
          </li>
          <li className='list-disc'>Visualiser vos adhérents</li>
          <li className='list-disc'>
            Gérer vos tournois pour les faire apparaitre directement sur le site
          </li>
        </Typography>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
          <Button className='text-center' href='/connect/feedback'>
            Donner votre avis
          </Button>
          <Button onClick={dismissPanel} theme='light-primary'>
            👌 Ne plus afficher ce message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

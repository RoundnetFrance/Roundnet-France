import { User } from "lucide-react";
import { CardContent, CardTitle, CardHeader } from "../../@/components/ui/card";
import { WelcomePanel } from "../../components/connect/dashboard/WelcomePanel";
import Image from "next/image";
import { Button, Card, Typography } from "../../components/ui-v2";

const ConnectHome = () => {
  return (
    <div className='space-y-12'>
      <section className='max-w-xl mx-auto'>
        <WelcomePanel />
      </section>

      <section className='space-y-4 max-w-4xl mx-auto'>
        <div className='md:grid md:grid-cols-6 md:gap-4'>
          <div className='relative col-span-2'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/roundnet-france-888b2.appspot.com/o/clubs%2Fvbjh1-titans-roundnet.jpg?alt=media&token=8b247c4e-8248-45da-ba28-12fb8871f719'
              alt='Roundnet'
              className='object-contain'
              fill
            />
          </div>
          <div className='space-y-4 col-span-4 flex flex-col gap-2'>
            <div>
              <Typography variant='h2' className='mb-4'>
                Titans Roundnet
              </Typography>
              <Typography>
                Le club Titans Roundnet a été créé en août 2019. Son logo
                représente un monument historique de la ville de Nantes, la grue
                jaune Titan. Il compte aujourd&apos;hui une soixantaine
                d&apos;adhérents, et propose 2 entrainements par semaine.
              </Typography>
            </div>
            <Button className='w-fit' href='/connect/informations'>
              Modifier
            </Button>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='grid gap-2'>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between items-start'>
                Mes adhérents
                <div>
                  <User />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-slate-100'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                hic dolorem quos voluptatibus, eos itaque quam officiis nostrum
                nam ex velit tempora maiores repellat harum esse, consequuntur
                corrupti cumque consequatur facilis magnam neque possimus
                labore, accusamus expedita. Ducimus assumenda iure minima non
                nisi maiores maxime! Atque, harum accusantium.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-2'>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between'>
                3 Tournois à venir
                <div>I</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  hic dolorem quos voluptatibus, eos itaque quam officiis
                  nostrum nam ex velit tempora maiores repellat harum esse,
                  consequuntur corrupti cumque consequatur facilis magnam neque
                  possimus labore, accusamus expedita. Ducimus assumenda iure
                  minima non nisi maiores maxime! Atque, harum accusantium.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-2'>
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between'>
                4 Tournois passés
                <div>
                  <User />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  hic dolorem quos voluptatibus, eos itaque quam officiis
                  nostrum nam ex velit tempora maiores repellat harum esse,
                  consequuntur corrupti cumque consequatur facilis magnam neque
                  possimus labore, accusamus expedita. Ducimus assumenda iure
                  minima non nisi maiores maxime! Atque, harum accusantium.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ConnectHome;

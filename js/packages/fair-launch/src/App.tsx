// @ts-nocheck


import './App.css';
import { useMemo } from 'react';
import { Layout } from 'antd';

import Home from './Home';

import * as anchor from '@project-serum/anchor';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';

import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const fairLaunchId = new anchor.web3.PublicKey(
  process.env.REACT_APP_FAIR_LAUNCH_ID!,
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
                   <div className="container-div" style={{ margin: 0, alignItems: 'center' }}>

      <img  style={{ display:"inline",  width: "100%", margin: "1%"}} src='https://dyor.market/elem.jpg' />
               </div>

			   <Layout className="container-div" style={{ margin: 0, marginLeft: "5%", marginRight: "5%", alignItems: 'center' }}>
         <video className="video-container video-container-overlay"  style={{ display:"inline", width: "15%"}} autoPlay="true" loop="true" muted="true" data-reactid=".0.1.0.0">
  <source type="video/mp4" data-reactid=".0.1.0.0.0" src="https://dyor.market/1.mp4" />
</video>

              <Home
                candyMachineId={candyMachineId}
                fairLaunchId={fairLaunchId}
                connection={connection}
                startDate={startDateSeed}
                txTimeout={txTimeout}
              />
		<video  style={{ display:"inline", width: "15%"}} className="video-container video-container-overlay" autoPlay="true" loop="true" muted="true" data-reactid=".0.1.0.0">
  <source type="video/mp4" data-reactid=".0.1.0.0.0" src="https://dyor.market/2.mp4" />
</video>


       </Layout>

<Layout style={{color: "white"}} >
<div><h1>
SUMMONERS EVOCATION   </h1>
</div>
<div>
Always a loner when it comes to your adventurers. Here at the SUMMONERS EVOCATION, you can summon familiars to tag along on your adventures and help you out in a tight pinch. 

</div>
<div>
These EVOCATIONS have many uses, from summoning simple spirits to more powerful beings such as Demons which Is a being associated with the evil forces of the world and possess very dark magic. Also known as a fiend for lesser powers. Deitys which are the divine status given to beings close to God's or Supreme beings. Being one of the most powerful to summon not everyone can obtain their power. Even Other supernatural beings such as vampires, ghouls, shtriga, wendigos, changelings and many more can all be summoned. 

</div>
<div>
Some summonings be better then others only due to some have more of an act for it. Even enough attempts even a amateur can someone on massive creature. 

</div>
<div><h2>
The Summoning - </h2>
</div>
<div>

Our current status for summonings will allow you to tap into a large quantity of Elemental beings. The Elementals are also known as "Elemental Spirits". These Elemental beings are humanoid in shape sometimes but is not always the case. They are conceived as living elements which lack a soul so without orders from a summoner they can rain down chaos if not watched closely. After all these are personifications of all the natural forces of the universe packed into physical form. Some are seen as demons and some saviors. 

</div>
<div>
Which one will you get??
</div>
<div style={{marginLeft: "1%"}}>
There will only be 138 winners. You will be able to place a bid from 0.25 to 3 sol to gain a spot on your summoners board. An when you win. You claim your summoned creature which is your and your alone. You can then decide to sell or trade your summonings if you wish.
</div>
</Layout>
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>

    </ThemeProvider>

  );
};

export default App;

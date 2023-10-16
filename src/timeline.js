import React from 'react';
import './Timeline.css'; 
import CompletedIcon from './complete';
import InCompletedIcon from './incomplete';
import InProgressIcon from './inprogress';

const Timeline = () => {
    return (
    <div>
      <div className="desktop">
        <div className="group-wrapper">
          <div className="group">
            <div className="overlap">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="rectangle"></div>
                  <div className="div"></div>
                  <div className="rectangle-2"></div>
                  <div className="rectangle-3"></div>
                  <div className="rectangle-4"></div>
                  <div className="rectangle-5"></div>
                  <div className="rectangle-6"></div>
                </div>
              </div>
              <div className="frame">
                <CompletedIcon />
              </div>
              <div className="div-wrapper">
                <CompletedIcon />
              </div>
              <div className="frame-2">
                <CompletedIcon />
              </div>
              <div className="frame-3">
                <CompletedIcon />
              </div>
              <div className="frame-4">
                <CompletedIcon />
              </div>
              <div className="frame-5">
                <CompletedIcon />
              </div>
              <div className="frame-6">
                <CompletedIcon />
              </div>
              <div className="frame-7">
                <CompletedIcon />
              </div>
              <div className="frame-8">
                <CompletedIcon />
              </div>
              <div className="frame-9">
                <CompletedIcon />
              </div>
              <div className="frame-10">
                <InCompletedIcon />
              </div>
              <div className="frame-11">
                <InProgressIcon />
              </div>
              <div className="frame-12">
                <InCompletedIcon />
              </div>
              <div className="frame-13">
                <InCompletedIcon />
              </div>
              <div className="frame-14">
                <InCompletedIcon />
              </div>
              <div className="frame-15">
                <InCompletedIcon />
              </div>
              <div className="group-2">
                <div className="text-wrapper-2">Fundraising</div>
                <p className="p">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="group-3">
                <div className="text-wrapper-2">Beta version on Polygon</div>
                <p className="lorem-ipsum-dolor">
                Hinkal’s Beta launch on Polygon attracts more than 1250 Early Supporters.
                </p>
              </div>
              <div className="group-4">
                <div className="text-wrapper-2">Live on 5 chains</div>
                <p className="lorem-ipsum-dolor">
                Hinkal goes live on Ethereum, Polygon, BNB Chain, Arbitrum and Avalanche.
                </p>
              </div>
              <div className="group-5">
                <div className="text-wrapper-2">KYC providers</div>
                <p className="lorem-ipsum-dolor">
                Hinkal offers Binance, Quadrata, Galxe, 0xKYC and aiPrise, as KYC options.
                </p>
              </div>
              <div className="group-6">
                <div className="text-wrapper-2">$1M volume</div>
                <p className="lorem-ipsum-dolor">
                Hinkal surpasses $1M volume in July 2023
                </p>
              </div>
              <div className="group-7">
                <p className="text-wrapper-2">
                6 dApps, 3 functions &#40;swaps, LP, staking&#41;</p>
                <p className="lorem-ipsum-dolor-2">
                Hinkal integrates with Curve, Convex, Beefy, Uniswap, Odos, and 1inch, offering seamless privacy for all trading strategies.
                </p>
              </div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-2">MVP</div>
              <p className="p">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="group-9">
                <div className="text-wrapper-2">3-tier security implementation</div>
                <p className="p">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
              <div className="group-10" >
                <div className="text-wrapper-2">Onboarding First liquid funds </div>
                <p className="lorem-ipsum-dolor" style={{color: "#8247E5"}}>BlockLabs Capital Management and several other liquid funds (undisclosed) join Hinkal to make their strategies private</p>
              </div>
             <div className="group-11" style={{ maxWidth: "254px"}}>
                <div className="text-wrapper-2">Stealth addresses</div>
                <p className="lorem-ipsum-dolor"  style={{color: "#8247E5", lineHeight: "16px", maxWidth: "254px"}}>Hinkal becomes the fist privacy solution implementing "stealth addresses" to solve the critical problem of unexpected slippage and gas overhead costs</p>
              </div>
            <div className="group-12">
                <div className="text-wrapper-2" style={{color: "#8247E5"}}>GMX integration</div>
              </div>
              <div className="group-13">
                <div className="text-wrapper-2">Lido integration</div>
              </div>
              <div className="group-14">
                <div className="text-wrapper-2">Launch on Base,
Optimism, zkSync Era</div>
              </div>
              <div className="group-15">
                <div className="text-wrapper-2">Introducing private mempools</div>
              </div>
              <div className="group-16">
                <div className="text-wrapper-2">Launching incentives for liquidity providers and NFT holders</div>
              </div>
              <div className="group-17">
                <div className="text-wrapper-2">New dApps, chains, and KYC providers
</div>
              </div>
            </div>
          </div>
        </div>
    </div>
        
    );
  };

export default Timeline;
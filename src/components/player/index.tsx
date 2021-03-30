import React, { createContext, ReactNode, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

interface IPlayer {
  children?: ReactNode;
}

interface IPlayeraType {
  Video: React.FC<{ src: string }>;
  Button: React.FC<IPlayer>;
}

export const PlayerContext = createContext(
  {} as { showPlayer: any; setShowPlayer: any }
);

const Player: React.FC<IPlayer> & IPlayeraType = ({
  children,
  ...restProps
}) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="netlix-player" controls autoPlay>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton() {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer: any) => !showPlayer)}>
      Play
    </Button>
  );
};

export default Player;

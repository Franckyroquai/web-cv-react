import React from 'react'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MovieIcon from '@mui/icons-material/Movie';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function interests() {
  return (
    <div className="skills">
        <h2 className="h2">Centres d'intérêts</h2>
        <ul>
            <li>Informatique</li>
            <li>Cinéma</li>
            <li>V.T.T.</li>
            <li>Guitare</li>
        </ul>
        <div className="interests">
            <KeyboardIcon style={{ fontsize: 40 }} />
            <MovieIcon style={{ fontsize: 40 }} />
            <DirectionsBikeIcon style={{ fontsize: 40 }} />
            <MusicNoteIcon style={{ fontsize: 40 }} />
        </div>
        <div className="user__infos">
            <p className="user__info"><KeyboardIcon />Informatique</p>
            <p className="user__info"><MovieIcon />Cinéma</p>
            <p className="user__info"><DirectionsBikeIcon />V.T.T.</p>
            <p className="user__info"><MusicNoteIcon />Guitare</p>
        </div>    
    </div>
  )
}

export default interests

import { createContext, useState, ReactNode } from 'react';
import challenges from "../../challenges.json"


interface ChallangesProviderProps{
    children: ReactNode;
}

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge:() => void;
    resetChallenge: () => void;
}
export const ChallangesContext = createContext({} as ChallengesContextData)

export function ChallangesProvider({ children }: ChallangesProviderProps){
    
    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted ] =useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level +1)*4,2)

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    return(
        <ChallangesContext.Provider
            value={{ 
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                resetChallenge
                    }}
                >
            {children}
        </ChallangesContext.Provider>
    )
}
import Navbar from "@/components/navbar/Nav";
import BattleMap from "@/components/avatarMap/battlemap";
import { Inter, 
         Spectral_SC } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const spectral = Spectral_SC({ subsets: ['cyrillic'],
                               weight: '400' })
                               
export default function Hello() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
        <div className = {spectral.className}>
            <br />
            <span>Hello there</span>
        </div>

        <BattleMap 
            className = "battleMap"    
        />

    </main>
    );
}
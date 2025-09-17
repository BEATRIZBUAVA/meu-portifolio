'use client'
import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeOff } from '@fortawesome/free-solid-svg-icons';


// Context para gerenciar o estado do som globalmente
const SoundContext = createContext();

// Hook para usar o contexto de som
export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound deve ser usado dentro de um SoundProvider');
    }
    return context;
};

// Provider do contexto de som
export const SoundProvider = ({ children }) => {
    const [enabled, setEnabled] = useState(true);
    const [loading, setLoading] = useState(true);
    const soundsRef = useRef({});
    const volume = 0.5;

    useEffect(() => {
        const loadSounds = async () => {
            // URLs dos seus arquivos de áudio - substitua pelos seus caminhos
            const soundFiles = {
                click: 'sounds/click.mp3',
                close: 'sounds/close.mp3',
                soundButton: 'sounds/sound_button.mp3',
                themeMusic: 'sounds/theme_music.mp3'
            };

            try {
                const soundPromises = Object.entries(soundFiles).map(([name, url]) =>
                    loadAudioFile(name, url)
                );

                await Promise.all(soundPromises);
                setLoading(false);
                console.log('Todos os sons carregados!');
            } catch (error) {
                console.warn('Erro ao carregar alguns sons:', error);
                setLoading(false);
                loadFallbackSounds();
            }
        };

        const loadAudioFile = (name, url) => {
            return new Promise((resolve, reject) => {
                const audio = new Audio();

                audio.addEventListener('canplaythrough', () => {
                    soundsRef.current[name] = {
                        instances: [audio],
                        currentIndex: 0
                    };

                    // Criar instâncias extras para sons que podem se sobrepor
                    if (['click'].includes(name)) {
                        for (let i = 0; i < 3; i++) {
                            const newAudio = new Audio(url);
                            newAudio.volume = volume;
                            soundsRef.current[name].instances.push(newAudio);
                        }
                    }

                    resolve();
                });

                audio.addEventListener('error', () => {
                    reject(new Error(`Failed to load ${url}`));
                });

                audio.volume = volume;
                audio.preload = 'auto';
                audio.src = url;
            });
        };

        const loadFallbackSounds = () => {
            console.log('Usando sons sintéticos como fallback...');
            soundsRef.current = {
                click: { play: () => console.log('Click sound') },
                close: { play: () => console.log('Close sound') },
                soundButton: { play: () => console.log('Sound button') },
                themeMusic: { play: () => console.log('Theme music') }
            };
        };

        loadSounds();
    }, []);

    const playSound = (soundName) => {
        if (!enabled || loading) return;

        const sound = soundsRef.current[soundName];
        if (!sound) return;

        if (sound.instances) {
            const instance = sound.instances[sound.currentIndex];
            sound.currentIndex = (sound.currentIndex + 1) % sound.instances.length;

            instance.volume = volume;
            instance.currentTime = 0;

            instance.play().catch(error => {
                console.warn(`Erro ao reproduzir som ${soundName}:`, error);
            });
        } else if (sound.play) {
            sound.play();
        }
    };

    const toggle = () => {
        setEnabled(!enabled);
        playSound('soundButton'); // Som específico para o botão de controle
    };

    return (
        <SoundContext.Provider value={{ enabled, loading, playSound, toggle }}>
            {children}
        </SoundContext.Provider>
    );
};

// Componente de controle de som para navbar
export default function SoundControl({
    className = "",
    showLabel = true,
    size = "md",
    variant = "default"
}) {
    const { enabled, toggle, playSound } = useSound();

    // Tamanhos disponíveis
    const sizes = {
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-lg",
        lg: "w-12 h-12 text-xl"
    };



    const handleToggle = () => {
        toggle();
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <button
                className={`
          ${sizes[size]}
          
          rounded-full flex items-center justify-center
          transition-all duration-300 hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-offset-2
        `}
                onClick={handleToggle}

                title={enabled ? 'Desativar som' : 'Ativar som'}
                aria-label={enabled ? 'Desativar som' : 'Ativar som'}
            >
                <FontAwesomeIcon icon={enabled ? faVolumeHigh : faVolumeOff} className="w-5 h-5" />

            </button>

            {showLabel && (
                <span className="text-xs text-gray-600 font-medium">
                    {enabled ? 'ON' : 'OFF'}
                </span>
            )}
        </div>
    );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Snail, Heart, Info } from "lucide-react";

export default function App() {
  const [yesSize, setYesSize] = useState(1);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const handleNo = () => {
    setNoCount((prev) => prev + 1);
    setYesSize((prev) => prev + 0.5);
  };

  const handleYes = () => {
    setHasAgreed(true);
  };

  const noPhrases = [
    "¿Segura?",
    "Piénsalo bien...",
    "¡Por favooor!",
    "Será muy limpio",
    "No hace ruido",
    "Es muy tierno",
    "¡Ándale mami!",
    "Prometo cuidarlo",
    "¡Mira qué carita!",
    "¿De verdad no?",
  ];

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center p-4 font-sans text-emerald-900">
      <AnimatePresence mode="wait">
        {!hasAgreed ? (
          <motion.div
            key="request"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border-4 border-emerald-200"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block mb-6"
            >
              <Snail size={80} className="text-emerald-600" />
            </motion.div>

            <h1 className="text-3xl font-bold mb-4 text-emerald-800">
              ¡Hola Mami Linda! ❤️
            </h1>
            <p className="text-lg mb-8 text-emerald-700">
              ¿Me dejas tener un caracol de mascota y me lo compras? 🐌✨
            </p>

            <div className="grid grid-cols-2 gap-4 items-center justify-center min-h-[160px] relative">
              <div className="flex items-center justify-center">
                <motion.button
                  style={{ scale: yesSize }}
                  whileHover={{ scale: yesSize * 1.05 }}
                  whileTap={{ scale: yesSize * 0.95 }}
                  onClick={handleYes}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors cursor-pointer z-20 whitespace-nowrap"
                >
                  ¡SÍ! ✅
                </motion.button>
              </div>

              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNo}
                  className="bg-rose-100 hover:bg-rose-200 text-rose-600 font-semibold py-2 px-4 rounded-full border-2 border-rose-200 transition-colors cursor-pointer w-36 h-12 flex items-center justify-center text-sm overflow-hidden text-ellipsis"
                >
                  {noCount === 0 ? "No" : noPhrases[Math.min(noCount - 1, noPhrases.length - 1)]}
                </motion.button>
              </div>
            </div>

            {noCount > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-sm text-emerald-500 italic"
              >
                * El botón de SÍ parece que tiene hambre de espacio...
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white p-10 rounded-3xl shadow-2xl border-4 border-emerald-400 max-w-sm"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block mb-6"
            >
              <Snail size={120} className="text-emerald-500" />
            </motion.div>
            
            <h2 className="text-4xl font-black text-emerald-600 mb-4">
              ¡GRACIAS MAMIIII!
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <Heart className="text-rose-500 fill-rose-500" />
              <Heart className="text-rose-500 fill-rose-500" />
              <Heart className="text-rose-500 fill-rose-500" />
            </div>
            <p className="text-emerald-700 font-medium">
              ¡Será el caracol más feliz del mundo! 🐌🏠
            </p>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="h-1 bg-emerald-100 mt-8 rounded-full overflow-hidden"
            >
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="h-full w-1/3 bg-emerald-500"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 left-4 flex items-center gap-2 text-emerald-400 text-xs">
        <Info size={14} />
        <span>Hecho con amor para convencer a mami</span>
      </div>
    </div>
  );
}

import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import {useColorModeValue} from '@chakra-ui/react'


const ButtonLayout = ({children}) => (
<AnimatePresence exitBeforeEnter initial={true}>
    <motion.div
    key={useColorModeValue('light', 'dark')}
    style={{display: 'inline-block'}}
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        transition={{duration: 0.2}} 
    
    >
        {children}
    </motion.div>
</AnimatePresence>
)

export default ButtonLayout
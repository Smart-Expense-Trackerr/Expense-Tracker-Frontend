import { motion } from "framer-motion";

type Props = {
    title: string;
    description: string;
};

export default function Error ({ title, description }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-5 right-5 z-50 bg-danger text-white p-4 rounded-lg shadow-lg w-80"
        >
            <h2 className="font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
        </motion.div>
    )
}
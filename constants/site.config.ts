import { Network } from "lucide-react";
import { Computer } from "lucide-react";
import { FaBusinessTime } from "react-icons/fa";

export const siteConfig = {
  supportEmail: "info@centsy.app",
};

export const features = [
  {
    name: "Smart Money Management",
    description:
      "Centsy provides intelligent insights and automated categorization to help you understand your spending patterns and make better financial decisions.",
    icon: Computer,
  },
  {
    name: "Everyday Financial Control",
    description:
      "A sensible personal finance app for everyday money management. Track expenses, set budgets, and achieve your financial goals with ease.",
    icon: FaBusinessTime,
  },
  {
    name: "Secure & Reliable",
    description:
      "Bank-level security with real-time synchronization across all your devices. Your financial data is always protected and up-to-date.",
    icon: Network,
  },
];

export const faqItems = [
  {
    question: "How do I get started?",
    answer:
      "Sign up for a free account, connect your bank accounts securely, and start tracking your finances. Centsy will automatically categorize your transactions and provide insights.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes! Centsy uses bank-level encryption and security protocols. Your financial data is never shared with third parties and is protected with the highest security standards.",
  },
  {
    question: "Can I use Centsy for business finances?",
    answer:
      "Absolutely! Centsy is perfect for both personal and small business financial management. Track expenses, manage budgets, and get insights for better financial decisions.",
  },
  {
    question: "Can I customize the UI components?",
    answer:
      "Definitely! All UI components are built with Tailwind CSS and shadcn/ui, making them highly customizable to match your brand's design system.",
  },
];

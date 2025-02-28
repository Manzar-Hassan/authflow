"use client";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({title, description}: CardProps) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

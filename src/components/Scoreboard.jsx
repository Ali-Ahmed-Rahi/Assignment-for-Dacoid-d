

const Scoreboard = ({ score, total }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
      <h2 className="text-2xl font-bold">Quiz Completed!</h2>
      <p className="mt-2 text-lg">Your score: {score} / {total}</p>
     
    </div>
  );
};

export default Scoreboard;

export default function DailyMacrosInfo({ proteins, carbohydrates, fats }) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Daily Macros Info</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-gray-700 font-semibold">Proteins</p>
          <p className="text-gray-700">{proteins} g</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Carbohydrates</p>
          <p className="text-gray-700">{carbohydrates} g</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Fats</p>
          <p className="text-gray-700">{fats} g</p>
        </div>
      </div>
    </div>
  );
}

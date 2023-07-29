import CalorieSummary from "../components/CalorieSummary";
import DailyMacrosInfo from "../components/DailyCaloriesInfo";
import LogMealButton from "../components/LogMealButton";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex justify-center items-center">
      <div>
        <CalorieSummary />
        <div className="mt-2">
          <DailyMacrosInfo />
        </div>
        <div className="mt-2">
        <LogMealButton />
        </div>
      </div>
    </div>
  );
}

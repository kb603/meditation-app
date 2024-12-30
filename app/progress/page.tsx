import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// This would typically come from a backend or state management system
const userProgress = {
  currentStreak: 7,
  longestStreak: 14,
  totalSessions: 30,
  totalTime: 300, // minutes
  achievements: [
    { name: "Early Bird", description: "Completed 5 morning meditations" },
    { name: "Zen Master", description: "Meditated for 100 total minutes" },
    { name: "Consistency King", description: "Maintained a 7-day streak" },
  ],
};

export default function Progress() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Your Meditation Journey
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Current Streak: {userProgress.currentStreak} days</p>
            <p>Longest Streak: {userProgress.longestStreak} days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Sessions: {userProgress.totalSessions}</p>
            <p>Total Time Meditated: {userProgress.totalTime} minutes</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
          <CardDescription>
            Milestones you&apos;ve reached in your mindfulness journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {userProgress.achievements.map((achievement, index) => (
              <li key={index} className="bg-white p-3 rounded shadow">
                <strong>{achievement.name}</strong>: {achievement.description}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CopingStrategiesVisualizations() {
  // Data for each variable
  const copingStrategiesData = [
    { name: 'Talking to friends or family', value: 100, percentage: 28.5 },
    { name: 'Engaging in exercise', value: 115, percentage: 32.8 },
    { name: 'Practicing relaxation techniques', value: 100, percentage: 28.5 },
    { name: 'Pursuing hobbies or interests', value: 36, percentage: 10.3 }
  ];

  const seekHelpFrequencyData = [
    { name: 'Always', value: 80, percentage: 22.8 },
    { name: 'Often', value: 118, percentage: 33.6 },
    { name: 'Sometimes', value: 115, percentage: 32.8 },
    { name: 'Rarely', value: 38, percentage: 10.8 }
  ];

  const copingEffectivenessData = [
    { name: 'Very effective', value: 86, percentage: 24.5 },
    { name: 'Effective', value: 124, percentage: 35.3 },
    { name: 'Somewhat effective', value: 108, percentage: 30.8 },
    { name: 'Not effective', value: 33, percentage: 9.4 }
  ];

  const supportTypeData = [
    { name: 'Emotional support', value: 106, percentage: 30.2 },
    { name: 'Financial support', value: 102, percentage: 29.1 },
    { name: 'Practical help', value: 113, percentage: 32.2 },
    { name: 'No support', value: 30, percentage: 8.5 }
  ];

  const discussComfortData = [
    { name: 'Very comfortable', value: 150, percentage: 42.7 },
    { name: 'Somewhat comfortable', value: 121, percentage: 34.5 },
    { name: 'Neutral', value: 53, percentage: 15.1 },
    { name: 'Very uncomfortable', value: 27, percentage: 7.7 }
  ];

  // Custom tooltip formatter
  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 shadow-md rounded">
          <p className="font-semibold">{label}</p>
          <p className="text-gray-700">Frequency: {payload[0].value}</p>
          <p className="text-gray-700">Percentage: {payload[0].payload.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col space-y-12 w-full">
      {/* Coping Strategies Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">What coping strategies do you use to manage the stress of being a breadwinner?</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={copingStrategiesData}
              margin={{ top: 20, right: 30, left: 50, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={80} 
                tick={{ fontSize: 12 }}
              />
              <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft', offset: -30 }} />
              <Tooltip content={customTooltip} />
              <Bar dataKey="value" fill="#8884d8" name="Frequency">
                {copingStrategiesData.map((entry, index) => (
                  <text
                    x={index * (800 / copingStrategiesData.length) + (800 / copingStrategiesData.length) / 2}
                    y={entry.value + 10}
                    textAnchor="middle"
                    fill="#333"
                    fontSize={12}
                    dy={-6}
                  >
                    {entry.percentage}%
                  </text>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Seek Help Frequency Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">How often do you seek help when feeling overwhelmed by your responsibilities as a breadwinner?</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={seekHelpFrequencyData}
              margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft', offset: -30 }} />
              <Tooltip content={customTooltip} />
              <Bar dataKey="value" fill="#82ca9d" name="Frequency">
                {seekHelpFrequencyData.map((entry, index) => (
                  <text
                    key={index}
                    x={index * (800 / seekHelpFrequencyData.length) + (800 / seekHelpFrequencyData.length) / 2}
                    y={entry.value + 10}
                    textAnchor="middle"
                    fill="#333"
                    fontSize={12}
                    dy={-6}
                  >
                    {entry.percentage}%
                  </text>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Coping Effectiveness Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">How effective do you find your coping strategies in managing stress?</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={copingEffectivenessData}
              margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft', offset: -30 }} />
              <Tooltip content={customTooltip} />
              <Bar dataKey="value" fill="#ffc658" name="Frequency">
                {copingEffectivenessData.map((entry, index) => (
                  <text
                    key={index}
                    x={index * (800 / copingEffectivenessData.length) + (800 / copingEffectivenessData.length) / 2}
                    y={entry.value + 10}
                    textAnchor="middle"
                    fill="#333"
                    fontSize={12}
                    dy={-6}
                  >
                    {entry.percentage}%
                  </text>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Support Type Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">What type of support do you receive from your family in your role as a breadwinner?</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={supportTypeData}
              margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft', offset: -30 }} />
              <Tooltip content={customTooltip} />
              <Bar dataKey="value" fill="#ff8042" name="Frequency">
                {supportTypeData.map((entry, index) => (
                  <text
                    key={index}
                    x={index * (800 / supportTypeData.length) + (800 / supportTypeData.length) / 2}
                    y={entry.value + 10}
                    textAnchor="middle"
                    fill="#333"
                    fontSize={12}
                    dy={-6}
                  >
                    {entry.percentage}%
                  </text>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Comfort Discussing Challenges Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">Do you feel comfortable discussing your challenges and feelings with friends?</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={discussComfortData}
              margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft', offset: -30 }} />
              <Tooltip content={customTooltip} />
              <Bar dataKey="value" fill="#8884d8" name="Frequency">
                {discussComfortData.map((entry, index) => (
                  <text
                    key={index}
                    x={index * (800 / discussComfortData.length) + (800 / discussComfortData.length) / 2}
                    y={entry.value + 10}
                    textAnchor="middle"
                    fill="#333"
                    fontSize={12}
                    dy={-6}
                  >
                    {entry.percentage}%
                  </text>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

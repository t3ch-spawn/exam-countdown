import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function WorkSurveyVisualizations() {
  // Data for each question
  const ageStartedData = [
    { name: "12 years or below", value: 22, percentage: 6.3 },
    { name: "13–15 years", value: 160, percentage: 45.6 },
    { name: "16–18 years", value: 145, percentage: 41.3 },
    { name: "19 years or above", value: 24, percentage: 6.8 },
  ];

  const reasonForWorkingData = [
    { name: "To support family financially", value: 86, percentage: 24.5 },
    { name: "To pay for my own education", value: 87, percentage: 24.8 },
    { name: "To gain work experience", value: 96, percentage: 27.4 },
    { name: "Personal interest in earning money", value: 82, percentage: 23.4 },
  ];

  const schoolImpactData = [
    { name: "Yes, significantly", value: 81, percentage: 23.1 },
    { name: "Yes, to some extent", value: 199, percentage: 56.7 },
    { name: "No, it has no impact", value: 71, percentage: 20.2 },
    { name: "Not applicable", value: 0, percentage: 0 },
  ];

  const typeOfWorkData = [
    { name: "Formal employment", value: 62, percentage: 17.7 },
    { name: "Informal work", value: 178, percentage: 50.7 },
    { name: "Skilled trade", value: 87, percentage: 24.8 },
    { name: "Unskilled trade", value: 24, percentage: 6.8 },
  ];

  // Custom label for pie charts
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
    value,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="12"
      >
        {`${name}: ${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col space-y-10 w-full">
      {/* Age Started Contributing Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-center">
          At what age did you start contributing financially to your household?
        </h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 h-64">
            <h3 className="text-center font-semibold">Bar Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ageStartedData}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={0}
                  interval={0}
                  tick={{ fontSize: 12 }}
                  height={60}
                />
                <YAxis
                  label={{
                    value: "Frequency",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value} (${props.payload.percentage}%)`,
                    "Frequency",
                  ]}
                />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 h-64">
            <h3 className="text-center font-semibold">Pie Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageStartedData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ageStartedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value} (${props.payload.percentage}%)`,
                    "Count",
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Reason for Working Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-center">
          What is the main reason you started working as an adolescent?
        </h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 h-64">
            <h3 className="text-center font-semibold">Bar Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={reasonForWorkingData}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={0}
                  interval={0}
                  tick={{ fontSize: 10 }}
                  height={60}
                />
                <YAxis
                  label={{
                    value: "Frequency",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value} (${props.payload.percentage}%)`,
                    "Frequency",
                  ]}
                />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 h-64">
            <h3 className="text-center font-semibold">Pie Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reasonForWorkingData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#82ca9d"
                  dataKey="value"
                >
                  {reasonForWorkingData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value} (${props.payload.percentage}%)`,
                    "Count",
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* School Impact Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-center">
          Does your work affect your school attendance and/or academic
          performance?
        </h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 h-64">
            <h3 className="text-center font-semibold">Bar Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={schoolImpactData.filter((item) => item.value > 0)}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={0}
                  interval={0}
                  tick={{ fontSize: 12 }}
                  height={60}
                />
                <YAxis
                  label={{
                    value: "Frequency",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value} (${props.payload.percentage}%)`,
                    "Frequency",
                  ]}
                />
                <Bar dataKey="value" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 h-64">
            <h3 className="text-center font-semibold">Pie Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={schoolImpactData.filter((item) => item.value > 0)}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#ffc658"
                  dataKey="value"
                >
                  {schoolImpactData
                    .filter((item) => item.value > 0)
                    .map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value} (${props.payload.percentage}%)`,
                    "Count",
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Type of Work Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-center">
          What type of work do you engage in to contribute to your household?
        </h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 h-64">
            <h3 className="text-center font-semibold">Bar Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={typeOfWorkData}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={0}
                  interval={0}
                  tick={{ fontSize: 12 }}
                  height={60}
                />
                <YAxis
                  label={{
                    value: "Frequency",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value} (${props.payload.percentage}%)`,
                    "Frequency",
                  ]}
                />
                <Bar dataKey="value" fill="#ff8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 h-64">
            <h3 className="text-center font-semibold">Pie Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typeOfWorkData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#ff8042"
                  dataKey="value"
                >
                  {typeOfWorkData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) => [
                    `${value} (${props.payload.percentage}%)`,
                    "Count",
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

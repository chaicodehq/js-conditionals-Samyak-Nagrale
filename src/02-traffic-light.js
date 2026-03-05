/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  if (!color.length || typeof color !== "string") return "INVALID SIGNAL";

  let trafficColor = color.trim().toLowerCase();
  let studentAction;
  if (trafficColor === "green") studentAction = "GO";
  else if (trafficColor === "yellow") studentAction = "SLOW DOWN";
  else if (trafficColor === "red") studentAction = "STOP";
  else if (trafficColor === "flashing red")
    studentAction = "STOP AND PROCEED WITH CAUTION";

  else studentAction = 'INVALID SIGNAL'

  return studentAction;

  // Your code here
}

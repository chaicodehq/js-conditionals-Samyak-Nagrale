/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  if (typeof password !== "string") {
    return "weak";
  }

  let pwdStrength = 0;

  const specialCharSet = new Set("!@#$%^&*()_+-=[]{}|;:,.<>?");
  // criteria 1
  if (password.length >= 8) {
    pwdStrength++;
  }

  let capFlag = false;
  let smallFlag = false;
  let numFlag = false;
  let specialFlag = false;

  for (let char of password) {
    // criteria 2
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90 && !capFlag) {
      pwdStrength++;
      capFlag = true;
    }

    // criteria 3
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122 && !smallFlag) {
      pwdStrength++;
      smallFlag = true;
    }

    // criteria 4
    if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57 && !numFlag) {
      pwdStrength++;
      numFlag = true;
    }

    //criteria 5
    if (specialCharSet.has(char) && !specialFlag) {
      pwdStrength++;
      specialFlag = true;
    }
  }

  if (pwdStrength <= 1) {
    return "weak";
  } else if (pwdStrength <= 3) {
    return "medium";
  } else if (pwdStrength == 4) {
    return "strong";
  } else {
    return "very strong";
  }
}

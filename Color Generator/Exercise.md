In this task, we will create a **Color Generator** application. The goal of the application is to display a specific color, either in **RGB** or **HEX** format.  

The user enters a color in their desired format, and after clicking the **Set** button, a `div` is displayed with the exact specified color.  

Attached, you can see how everything should look in the end.  

---

### **Implementation:**

#### **1. Setting a color using HEX format (30 points)**  
- In `index.html`, you will find an input with the `id="hexColor"` and a button with the `id="setHexBtn"`.  
- There is also a `div` with the `id="coloredDiv"`.  
- When the user clicks the **Set** button, the `coloredDiv` should adopt the entered color.  

✅ **Validation:**  
- If no color is entered in the input field, an error message should appear (`#hexColorError`).  
- The program should work whether the user includes `#` at the beginning or not.  

---

#### **2. Setting a color using RGB format (30 points)**  
- In `index.html`, you will find inputs with the IDs `red`, `blue`, and `green`, along with a button with the `id="setRGBBtn"`.  
- When the user clicks the **Set** button, the `coloredDiv` should adopt the color defined by the red, green, and blue inputs.  

✅ **Validation:**  
- If any of the RGB fields are left empty, an error message should appear (`#rgbError`).  
- The values must be between **0 and 255**.  

---

#### **3. Random color generation (40 points)**  
- In `index.html`, you will find a checkbox with the `id="randomGenerateColor"`.  
- When the user selects this checkbox, the `div` should change to a randomly generated color every **3 seconds**.  
- Conversely, if the checkbox is unchecked, the random color change should stop.  

✅ **Additional functionality:**  
- The randomly generated color should be in **RGB** format.  
- When a new color is set, the values should be filled into the `red`, `green`, and `blue` input fields.
import React from "react";
import "../styles.css"; // Import the same CSS file for consistent styling

const DaprmForm = () => {
  return (
    <div>
      <h2>DAPRM Form</h2>
      <form>
        {/* Omics Technology */}
        <fieldset>
          <legend>Omics Technology</legend>
          <label htmlFor="omics-technology">Omics technology, manufacturer, and model:</label>
          <textarea id="omics-technology" name="omics-technology" />
        </fieldset>

        {/* Data Acquisition Approach */}
        <fieldset>
          <legend>Data Acquisition</legend>
          <label htmlFor="data-acquisition">Description and rationale for data acquisition approach:</label>
          <textarea id="data-acquisition" name="data-acquisition" />
        </fieldset>

        {/* Sample Preparation */}
        <fieldset>
          <legend>Sample Preparation</legend>
          <label htmlFor="sample-preparation">Sample preparation method:</label>
          <textarea id="sample-preparation" name="sample-preparation" />
        </fieldset>

        {/* Quality Assurance */}
        <fieldset>
          <legend>Quality Assurance</legend>
          <label htmlFor="quality-analysis">Demonstration of quality of analysis (i.e. QA/QC used):</label>
          <textarea id="quality-analysis" name="quality-analysis" />
        </fieldset>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DaprmForm;


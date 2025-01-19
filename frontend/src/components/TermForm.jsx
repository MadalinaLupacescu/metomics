import React from "react";
import "../styles.css";

const TermForm = () => {
  return (
    <div>
      <h2>TERM Form</h2>
      <form>
        {/* Background Information */}
        <fieldset>
          <label htmlFor="backgroundInformation">Background Information:</label>
          <textarea id="backgroundInformation" name="backgroundInformation" />

          {/* Objectives */}
          <label htmlFor="objectives">Objectives:</label>
          <textarea id="objectives" name="objectives" />
        </fieldset>

        {/* Test Item */}
        <fieldset>
          <legend>Test Item</legend>

          <label htmlFor="testItemName">Test item name:</label>
          <input type="text" id="testItemName" name="testItemName" />

          <label htmlFor="testItemCAS">Test Item CAS (if number exists):</label>
          <input type="text" id="testItemCAS" name="testItemCAS" />

          <label htmlFor="testItemSMILES">Test item SMILES:</label>
          <input type="text" id="testItemSMILES" name="testItemSMILES" />

          <label htmlFor="testItemIUPACName">Test item IUPAC name:</label>
          <input type="text" id="testItemIUPACName" name="testItemIUPACName" />

          <label htmlFor="testItemSources">Test item - sources of identifiers:</label>
          <textarea id="testItemSources" name="testItemSources" />
        </fieldset>

        {/* Test System Characteristics (In Vivo) */}
        <fieldset>
          <legend>Test System Characteristics (In Vivo)</legend>

          <label htmlFor="species">Species:</label>
          <input type="text" id="species" name="species" />

          <label htmlFor="strain">Strain:</label>
          <input type="text" id="strain" name="strain" />

          <label htmlFor="sex">Sex:</label>
          <input type="text" id="sex" name="sex" />

          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" />
        </fieldset>

        {/* Test System Characteristics (In Vitro) */}
        <fieldset>
          <legend>Test System Characteristics (In Vitro)</legend>

          <label htmlFor="cellType">Cell type:</label>
          <input type="text" id="cellType" name="cellType" />

          <label htmlFor="speciesOfOrigin">Species of origin:</label>
          <input type="text" id="speciesOfOrigin" name="speciesOfOrigin" />
        </fieldset>

        {/* Study Design */}
        <fieldset>
          <legend>Study Design</legend>

          <label htmlFor="doseLevels">Dose levels (including units):</label>
          <input type="text" id="doseLevels" name="doseLevels" />

          <label htmlFor="doseIntervals">Dose intervals (including units):</label>
          <input type="text" id="doseIntervals" name="doseIntervals" />

          <label htmlFor="biologicalReplicates">Number of biological replicates per treatment condition:</label>
          <input type="text" id="biologicalReplicates" name="biologicalReplicates" />

          <label htmlFor="timetable">Timetable - sample collection:</label>
          <textarea id="timetable" name="timetable" />
        </fieldset>

        {/* Treatment Conditions */}
        <fieldset>
          <legend>Treatment Conditions</legend>

          <label htmlFor="routeOfAdministration">Route of administration:</label>
          <input type="text" id="routeOfAdministration" name="routeOfAdministration" />

          <label htmlFor="vehicle">Identity of vehicle:</label>
          <input type="text" id="vehicle" name="vehicle" />
        </fieldset>

        {/* Sample Collection */}
        <fieldset>
          <legend>Sample Collection</legend>

          <label htmlFor="sampleType">Type of biological sample for omics:</label>
          <textarea id="sampleType" name="sampleType" />

          <label htmlFor="preservationMethod">Sample preservation method:</label>
          <textarea id="preservationMethod" name="preservationMethod" />
        </fieldset>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default TermForm;


#target photoshop
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: PS - ColorProfile-RGB.jsx
//          coder: AdamRyan
//        program: Adobe Photoshop
//    description: Sets the documents color profile to RGB
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// in case we double clicked the file
app.bringToFront();

main();

function main() {
	if ( app.documents.length <= 0 ) {
		alert("You must have a document open to change color profile");
		return;
	}
	
	// Convert the Profile to sRGB
	app.activeDocument.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC);
    }
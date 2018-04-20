// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var trials = _.shuffle([
		{"Trial_item_ID":"1", "Condition":"NoContrast","Noun":"square","Adj":"bumpy","Color":"blue","Images":["bumpy_bluesquare6.jpg", "bumpy_greencircle7.jpg", "tall_yellowcylinder3.jpg", "striped_redtriangle4.jpg"]},
		{"Trial_item_ID":"2", "Condition":"Contrast","Noun":"circle","Adj":"open","Color":"blue","Images":["open_bluecircle6.jpg", "open_redtriangle7.jpg", "yellow_cloud.jpg", "open_greencircle1.jpg"]},
		{"Trial_item_ID":"3", "Condition":"NoContrast","Noun":"line","Adj":"bent","Color":"green","Images":["bent_greenline6.jpg", "bent_redarrow7.jpg", "yellow_cloud.jpg", "big_bluesquare1.jpg"]},
		{"Trial_item_ID":"4", "Condition":"Contrast","Noun":"line","Adj":"curved","Color":"red","Images":["curved_redline6.jpg", "curved_greenarrow7.jpg", "yellow_star.jpg", "curved_blueline1.jpg"]},
		{"Trial_item_ID":"5", "Condition":"NoContrast","Noun":"circle","Adj":"spotted","Color":"yellow","Images":["spotted_yellowcircle6.jpg", "spotted_redsquare7.jpg", "striped_bluetriangle4.jpg", "thick_greenarrow1.jpg"]},
		{"Trial_item_ID":"6", "Condition":"Contrast","Noun":"square","Adj":"striped","Color":"yellow","Images":["striped_yellowsquare6.jpg", "striped_bluetriangle7.jpg", "spotted_redstar.jpg", "striped_greensquare1.jpg"]},
		{"Trial_item_ID":"7", "Condition":"NoContrast","Noun":"triangle","Adj":"bumpy","Color":"red","Images":["bumpy_redtriangle6.jpg", "bumpy_bluesquare7.jpg", "spotted_greencircle4.jpg", "full_yellowcylinder2.jpg"]},
		{"Trial_item_ID":"8", "Condition":"Contrast","Noun":"line","Adj":"curved","Color":"blue","Images":["curved_blueline6.jpg", "curved_redarrow7.jpg", "bumpy_yellowtriangle1.jpg", "curved_greenline1.jpg"]},
		{"Trial_item_ID":"9", "Condition":"NoContrast","Noun":"square","Adj":"spotted","Color":"yellow","Images":["spotted_yellowsquare6.jpg", "spotted_greentriangle7.jpg", "diagonal_bluearrow.jpg", "striped_redcircle5.jpg"]},
		{"Trial_item_ID":"10", "Condition":"Contrast","Noun":"triangle","Adj":"striped","Color":"red","Images":["striped_redtriangle6.jpg", "striped_greensquare7.jpg", "chereos_yellowoval.jpg", "striped_bluetriangle1.jpg"]},
		{"Trial_item_ID":"11", "Condition":"NoContrast","Noun":"circle","Adj":"flat","Color":"green","Images":["bumpy_greencircle2.jpg", "bumpy_yellowtriangle1.jpg", "full_cube8.jpg", "tall_bluespiral7.jpg"]},
		{"Trial_item_ID":"12", "Condition":"Contrast","Noun":"circle","Adj":"closed","Color":"green","Images":["open_greencircle2.jpg", "open_bluesquare1.jpg", "bumpy_redline.jpg", "open_yellowcircle5.jpg"]},
		{"Trial_item_ID":"13", "Condition":"NoContrast","Noun":"line","Adj":"straight","Color":"blue","Images":["curved_blueline2.jpg", "curved_greenarrow1.jpg", "spotted_yellowcircle4.jpg", "red_cloud.jpg"]},
		{"Trial_item_ID":"14", "Condition":"Contrast","Noun":"cube","Adj":"full","Color":"yellow","Images":["full_yellowcube6.jpg", "full_redcylinder7.jpg", "diagonal_bluearrow.jpg", "full_greencube3.jpg"]},
		{"Trial_item_ID":"15", "Condition":"NoContrast","Noun":"cube","Adj":"empty","Color":"blue","Images":["full_bluecube1.jpg", "empty_transparentcylinder.jpg", "curved_greenline4.jpg", "blue_bumpyline.jpg"]},
		{"Trial_item_ID":"16", "Condition":"Contrast","Noun":"triangle","Adj":"flat","Color":"yellow","Images":["bumpy_yellowtriangle2.jpg", "bumpy_bluesquare1.jpg", "green_sphere.jpg", "bumpy_redtriangle5.jpg"]},
		{"Trial_item_ID":"17", "Condition":"NoContrast","Noun":"circle","Adj":"closed","Color":"blue","Images":["open_bluecircle2.jpg", "open_yellowtriangle1.jpg", "long_redline7.jpg", "green_wavyline.jpg"]},
		{"Trial_item_ID":"18", "Condition":"Contrast","Noun":"line","Adj":"straight","Color":"red","Images":["bent_redline2.jpg", "bent_greenarrow1.jpg", "chereos_yellowoval.jpg", "bent_blueline5.jpg"]},
		{"Trial_item_ID":"19", "Condition":"NoContrast","Noun":"cylinder","Adj":"full","Color":"blue","Images":["full_bluecylinder6.jpg", "full_greencube7.jpg", "tall_redspiral4.jpg", "thick_yellowline1.jpg"]},
		{"Trial_item_ID":"20", "Condition":"Contrast","Noun":"cylinder","Adj":"empty","Color":"yellow","Images":["full_yellowcylinder1.jpg", "empty_transparentcube.jpg", "yellow_cloud.jpg", "full_redcylinder5.jpg"]},
		{"Trial_item_ID":"21", "Condition":"NoContrast","Noun":"line","Adj":"long","Color":"red","Images":["long_redline5.jpg", "long_greenarrow6.jpg", "yellow_sun.jpg", "open_bluecircle1.jpg"]},
		{"Trial_item_ID":"22", "Condition":"Contrast","Noun":"line","Adj":"short","Color":"blue","Images":["long_blueline3.jpg", "long_redarrow2.jpg", "yellow_star.jpg", "long_greenline5.jpg"]},
		{"Trial_item_ID":"23", "Condition":"NoContrast","Noun":"square","Adj":"big","Color":"red","Images":["big_redsquare5.jpg", "big_yellowtriangle6.jpg", "green_wavyline.jpg", "curved_blueline4.jpg"]},
		{"Trial_item_ID":"24", "Condition":"Contrast","Noun":"triangle","Adj":"small","Color":"yellow","Images":["big_yellowtriangle3.jpg", "big_redsquare2.jpg", "green_wavyline.jpg", "big_bluetriangle5.jpg"]},
		{"Trial_item_ID":"25", "Condition":"NoContrast","Noun":"oval","Adj":"wide","Color":"green","Images":["wide_greenoval5.jpg", "wide_yellowrectangle6.jpg", "open_bluesquare7.jpg", "bent_redline4.jpg"]},
		{"Trial_item_ID":"26", "Condition":"Contrast","Noun":"rectangle","Adj":"narrow","Color":"red","Images":["wide_redrectangle3.jpg", "wide_yellowoval2.jpg", "blue_star.jpg", "wide_greenrectangle5.jpg"]},
		{"Trial_item_ID":"27", "Condition":"NoContrast","Noun":"spiral","Adj":"tall","Color":"blue","Images":["tall_bluespiral5.jpg", "tall_greencylinder6.jpg", "chereos_yellowoval.jpg", "curved_redline4.jpg"]},
		{"Trial_item_ID":"28", "Condition":"Contrast","Noun":"spiral","Adj":"short","Color":"red","Images":["tall_redspiral3.jpg", "tall_yellowcylinder2.jpg", "full_cube8.jpg", "tall_greenspiral5.jpg"]},
		{"Trial_item_ID":"29", "Condition":"NoContrast","Noun":"line","Adj":"thick","Color":"yellow","Images":["thick_yellowline5.jpg", "thick_greenarrow6.jpg", "red_sun.jpg", "bumpy_blueshape.jpg"]},
		{"Trial_item_ID":"30", "Condition":"Contrast","Noun":"line","Adj":"thin","Color":"blue","Images":["thick_blueline3.jpg", "thick_redarrow2.jpg", "bumpy_greencircle4.jpg", "thick_yellowline5.jpg"]},
		{"Trial_item_ID":"31", "Condition":"NoContrast","Noun":"line","Adj":"long","Color":"green","Images":["long_greenline5.jpg", "long_bluearrow6.jpg", "yellow_cloud.jpg", "spotted_redstar.jpg"]},
		{"Trial_item_ID":"32", "Condition":"Contrast","Noun":"line","Adj":"short","Color":"red","Images":["long_redline3.jpg", "long_bluearrow2.jpg", "full_yellowcube7.jpg", "long_greenline5.jpg"]},
		{"Trial_item_ID":"33", "Condition":"NoContrast","Noun":"triangle","Adj":"big","Color":"yellow","Images":["big_yellowtriangle5.jpg", "big_bluesquare6.jpg", "long_redline4.jpg", "green_garabato.jpg"]},
		{"Trial_item_ID":"34", "Condition":"Contrast","Noun":"square","Adj":"small","Color":"blue","Images":["big_bluesquare3.jpg", "big_yellowtriangle2.jpg", "green_garabato.jpg", "big_redsquare5.jpg"]},
		{"Trial_item_ID":"35", "Condition":"NoContrast","Noun":"rectangle","Adj":"wide","Color":"yellow","Images":["wide_yellowrectangle5.jpg", "wide_redoval6.jpg", "open_bluetriangle7.jpg", "bent_greenline4.jpg"]},
		{"Trial_item_ID":"36", "Condition":"Contrast","Noun":"oval","Adj":"narrow","Color":"red","Images":["wide_redoval3.jpg", "wide_greenrectangle2.jpg", "full1_bluesquare2.jpg", "wide_yellowoval5.jpg"]},
		{"Trial_item_ID":"37", "Condition":"NoContrast","Noun":"cylinder","Adj":"tall","Color":"yellow","Images":["tall_yellowcylinder5.jpg", "tall_bluespiral6.jpg", "bent_redline1.jpg", "green_wavyline.jpg"]},
		{"Trial_item_ID":"38", "Condition":"Contrast","Noun":"cylinder","Adj":"short","Color":"green","Images":["tall_greencylinder3.jpg", "tall_bluespiral2.jpg", "yellow_cloud.jpg", "tall_redcylinder5.jpg"]},
		{"Trial_item_ID":"39", "Condition":"NoContrast","Noun":"line","Adj":"thick","Color":"blue","Images":["thick_blueline5.jpg", "thick_redarrow6.jpg", "green_star.jpg", "spotted_yellowsquare4.jpg"]},
		{"Trial_item_ID":"40", "Condition":"Contrast","Noun":"line","Adj":"thin","Color":"red","Images":["thick_redline3.jpg", "thick_greenarrow2.jpg", "spotted_yellowcircle4.jpg", "thick_blueline5.jpg"]}
]);


/*var nouns = [
		{"Noun":"apple", "NounCondition":"food"},
		{"Noun":"banana", "NounCondition":"food"},
		{"Noun":"carrot", "NounCondition":"food"},
		{"Noun":"cheese", "NounCondition":"food"},
		{"Noun":"tomato", "NounCondition":"food"},
		{"Noun":"chair", "NounCondition":"furniture"},
		{"Noun":"couch", "NounCondition":"furniture"},
		{"Noun":"fan", "NounCondition":"furniture"},
		{"Noun":"TV", "NounCondition":"furniture"},
		{"Noun":"desk", "NounCondition":"furniture"}
];*/

//var stimuli =  makeStims();
var stimuli = makeStims();

function makeStims() {
	stims = [];

	for (var i=0; i<trials.length; i++) {
		images = trials[i].Images;

		ordered_images = _.shuffle(images);

		stims.push(
			{
				"Trial_item_ID":trials[i].Trial_item_ID,
				"Condition":trials[i].Condition,
				"Noun":trials[i].Noun,
				"Adj":trials[i].Adj,
				"Color":trials[i].Color,
				"Images":ordered_images,
				"DisplayID":i+1
			}
			);
		}

	return stims;

}

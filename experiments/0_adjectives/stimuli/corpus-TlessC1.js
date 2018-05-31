// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var trials = _.shuffle([
		{"Trial_item_ID":"1", "Condition":"Contrast","Noun":"square","Adj":"bumpy","Color":"blue","Images":["bumpy_bluesquare6.jpg", "bumpy_greencircle7.jpg", "tall_yellowcylinder3.jpg", "bumpy_redsquare1.jpg"]},
		{"Trial_item_ID":"2", "Condition":"NoContrast","Noun":"circle","Adj":"open","Color":"blue","Images":["open_bluecircle6.jpg", "open_redtriangle7.jpg", "yellow_cloud.jpg", "green_garabato.jpg"]},
		{"Trial_item_ID":"3", "Condition":"Contrast","Noun":"line","Adj":"bent","Color":"green","Images":["bent_greenline6.jpg", "bent_redarrow7.jpg", "yellow_cloud.jpg", "bent_blueline1.jpg"]},
		{"Trial_item_ID":"4", "Condition":"NoContrast","Noun":"line","Adj":"curved","Color":"red","Images":["curved_redline6.jpg", "curved_greenarrow7.jpg", "yellow_star.jpg", "striped_bluetriangle4.jpg"]},
		{"Trial_item_ID":"5", "Condition":"Contrast","Noun":"circle","Adj":"spotted","Color":"yellow","Images":["spotted_yellowcircle6.jpg", "spotted_redsquare7.jpg", "striped_bluetriangle4.jpg", "spotted_greencircle1.jpg"]},
		{"Trial_item_ID":"6", "Condition":"NoContrast","Noun":"square","Adj":"striped","Color":"yellow","Images":["striped_yellowsquare6.jpg", "striped_bluetriangle7.jpg", "spotted_redstar.jpg", "bumpy_greencircle4.jpg"]},
		{"Trial_item_ID":"7", "Condition":"Contrast","Noun":"triangle","Adj":"bumpy","Color":"red","Images":["bumpy_redtriangle6.jpg", "bumpy_bluesquare7.jpg", "spotted_greencircle4.jpg", "bumpy_yellowtriangle1.jpg"]},
		{"Trial_item_ID":"8", "Condition":"NoContrast","Noun":"line","Adj":"curved","Color":"blue","Images":["curved_blueline6.jpg", "curved_redarrow7.jpg", "bumpy_yellowtriangle1.jpg", "green_lightning.jpg"]},
		{"Trial_item_ID":"9", "Condition":"Contrast","Noun":"square","Adj":"spotted","Color":"yellow","Images":["spotted_yellowsquare6.jpg", "spotted_greentriangle7.jpg", "diagonal_bluearrow.jpg", "spotted_redsquare1.jpg"]},
		{"Trial_item_ID":"10", "Condition":"NoContrast","Noun":"triangle","Adj":"striped","Color":"red","Images":["striped_redtriangle6.jpg", "striped_greensquare7.jpg", "chereos_yellowoval.jpg", "bumpy_blueshape.jpg"]},
		{"Trial_item_ID":"11", "Condition":"Contrast","Noun":"circle","Adj":"flat","Color":"green","Images":["bumpy_greencircle2.jpg", "bumpy_yellowtriangle1.jpg", "full_cube8.jpg", "bumpy_bluecircle5.jpg"]},
		{"Trial_item_ID":"12", "Condition":"NoContrast","Noun":"circle","Adj":"closed","Color":"green","Images":["open_greencircle2.jpg", "open_bluesquare1.jpg", "bumpy_redline.jpg", "yellow_wavyline.jpg"]},
		{"Trial_item_ID":"13", "Condition":"Contrast","Noun":"line","Adj":"straight","Color":"blue","Images":["curved_blueline2.jpg", "curved_greenarrow1.jpg", "spotted_yellowcircle4.jpg", "curved_redline5.jpg"]},
		{"Trial_item_ID":"14", "Condition":"NoContrast","Noun":"cube","Adj":"full","Color":"yellow","Images":["full_yellowcube6.jpg", "full_redcylinder7.jpg", "diagonal_bluearrow.jpg", "tall_greenspiral2.jpg"]},
		{"Trial_item_ID":"15", "Condition":"Contrast","Noun":"cube","Adj":"empty","Color":"blue","Images":["full_bluecube1.jpg", "empty_transparentcylinder.jpg", "curved_greenline4.jpg", "full_contrastcube5.jpg"]},
		{"Trial_item_ID":"16", "Condition":"NoContrast","Noun":"triangle","Adj":"flat","Color":"yellow","Images":["bumpy_yellowtriangle2.jpg", "bumpy_bluesquare1.jpg", "green_sphere.jpg", "tall_redspiral7.jpg"]},
		{"Trial_item_ID":"17", "Condition":"Contrast","Noun":"circle","Adj":"closed","Color":"blue","Images":["open_bluecircle2.jpg", "open_yellowtriangle1.jpg", "long_redline7.jpg", "open_greencircle5.jpg"]},
		{"Trial_item_ID":"18", "Condition":"NoContrast","Noun":"line","Adj":"straight","Color":"red","Images":["bent_redline2.jpg", "bent_greenarrow1.jpg", "chereos_yellowoval.jpg", "full_bluecylinder7.jpg"]},
		{"Trial_item_ID":"19", "Condition":"Contrast","Noun":"cylinder","Adj":"full","Color":"blue","Images":["full_bluecylinder6.jpg", "full_greencube7.jpg", "tall_redspiral4.jpg", "full_yellowcylinder3.jpg"]},
		{"Trial_item_ID":"20", "Condition":"NoContrast","Noun":"cylinder","Adj":"empty","Color":"yellow","Images":["full_yellowcylinder1.jpg", "empty_transparentcube.jpg", "yellow_cloud.jpg", "long_redline1.jpg"]},
		{"Trial_item_ID":"21", "Condition":"Contrast","Noun":"line","Adj":"long","Color":"red","Images":["long_redline5.jpg", "long_greenarrow6.jpg", "yellow_sun.jpg", "long_blueline3.jpg"]},
		{"Trial_item_ID":"22", "Condition":"NoContrast","Noun":"line","Adj":"short","Color":"blue","Images":["long_blueline3.jpg", "long_redarrow2.jpg", "yellow_star.jpg", "green_heart.jpg"]},
		{"Trial_item_ID":"23", "Condition":"Contrast","Noun":"square","Adj":"big","Color":"red","Images":["big_redsquare5.jpg", "big_yellowtriangle6.jpg", "green_wavyline.jpg", "big_bluesquare3.jpg"]},
		{"Trial_item_ID":"24", "Condition":"NoContrast","Noun":"triangle","Adj":"small","Color":"yellow","Images":["big_yellowtriangle3.jpg", "big_redsquare2.jpg", "green_wavyline.jpg", "diagonal_bluearrow.jpg"]},
		{"Trial_item_ID":"25", "Condition":"Contrast","Noun":"oval","Adj":"wide","Color":"green","Images":["wide_greenoval5.jpg", "wide_yellowrectangle6.jpg", "open_bluesquare7.jpg", "wide_redoval3.jpg"]},
		{"Trial_item_ID":"26", "Condition":"NoContrast","Noun":"rectangle","Adj":"narrow","Color":"red","Images":["wide_redrectangle3.jpg", "wide_yellowoval2.jpg", "blue_star.jpg", "spotted_greenpentagon.jpg"]},
		{"Trial_item_ID":"27", "Condition":"Contrast","Noun":"spiral","Adj":"tall","Color":"blue","Images":["tall_bluespiral5.jpg", "tall_greencylinder6.jpg", "chereos_yellowoval.jpg", "tall_redspiral3.jpg"]},
		{"Trial_item_ID":"28", "Condition":"NoContrast","Noun":"spiral","Adj":"short","Color":"red","Images":["tall_redspiral3.jpg", "tall_yellowcylinder2.jpg", "blue_sun.jpg", "full1_greensquare1.jpg"]},
		{"Trial_item_ID":"29", "Condition":"Contrast","Noun":"line","Adj":"thick","Color":"yellow","Images":["thick_yellowline5.jpg", "thick_greenarrow6.jpg", "red_sun.jpg", "thick_blueline3.jpg"]},
		{"Trial_item_ID":"30", "Condition":"NoContrast","Noun":"line","Adj":"thin","Color":"blue","Images":["thick_blueline3.jpg", "thick_redarrow2.jpg", "bumpy_greencircle4.jpg", "yellow_star.jpg"]},
		{"Trial_item_ID":"31", "Condition":"Contrast","Noun":"line","Adj":"long","Color":"green","Images":["long_greenline5.jpg", "long_bluearrow6.jpg", "yellow_cloud.jpg", "long_redline3.jpg"]},
		{"Trial_item_ID":"32", "Condition":"NoContrast","Noun":"line","Adj":"short","Color":"red","Images":["long_redline3.jpg", "long_bluearrow2.jpg", "full_yellowcube7.jpg", "spotted_greencircle4.jpg"]},
		{"Trial_item_ID":"33", "Condition":"Contrast","Noun":"triangle","Adj":"big","Color":"yellow","Images":["big_yellowtriangle5.jpg", "big_bluesquare6.jpg", "long_redline4.jpg", "big_greentriangle3.jpg"]},
		{"Trial_item_ID":"34", "Condition":"NoContrast","Noun":"square","Adj":"small","Color":"blue","Images":["big_bluesquare3.jpg", "big_yellowtriangle2.jpg", "green_garabato.jpg", "red_wavyline.jpg"]},
		{"Trial_item_ID":"35", "Condition":"Contrast","Noun":"rectangle","Adj":"wide","Color":"yellow","Images":["wide_yellowrectangle5.jpg", "wide_redoval6.jpg", "open_bluetriangle7.jpg", "wide_greenrectangle3.jpg"]},
		{"Trial_item_ID":"36", "Condition":"NoContrast","Noun":"oval","Adj":"narrow","Color":"red","Images":["wide_redoval3.jpg", "wide_greenrectangle2.jpg", "full1_bluesquare2.jpg", "yellow_sun.jpg"]},
		{"Trial_item_ID":"37", "Condition":"Contrast","Noun":"cylinder","Adj":"tall","Color":"yellow","Images":["tall_yellowcylinder5.jpg", "tall_bluespiral6.jpg", "bent_redline1.jpg", "tall_greencylinder3.jpg"]},
		{"Trial_item_ID":"38", "Condition":"NoContrast","Noun":"cylinder","Adj":"short","Color":"green","Images":["tall_greencylinder3.jpg", "tall_bluespiral2.jpg", "yellow_cloud.jpg", "spotted_redstar.jpg"]},
		{"Trial_item_ID":"39", "Condition":"Contrast","Noun":"line","Adj":"thick","Color":"blue","Images":["thick_blueline5.jpg", "thick_redarrow6.jpg", "green_star.jpg", "thick_yellowline3.jpg"]},
		{"Trial_item_ID":"40", "Condition":"NoContrast","Noun":"line","Adj":"thin","Color":"red","Images":["thick_redline3.jpg", "thick_greenarrow2.jpg", "spotted_yellowcircle4.jpg", "bumpy_bluesquare4.jpg"]}
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

default:  build   test


build:
	R CMD INSTALL SubjectHistory
	R CMD INSTALL Dataset
	R CMD INSTALL DEMOdz
	R CMD INSTALL ChinookDataset
	R CMD INSTALL ChinookServer


test:
	R -f SubjectHistory/inst/unitTests/test_SubjectHistory.R
	R -f Dataset/inst/unitTests/test_Dataset.R
	R -f DEMOdz/inst/unitTests/test_DEMOdz.R
	R -f ChinookDataset/inst/unitTests/test_ChinookDataset.R
	R -f ChinookServer/inst/unitTests/test_ChinookServer.R


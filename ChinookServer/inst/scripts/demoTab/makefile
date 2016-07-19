CHINOOK_ROOT=../../../../../Chinook
default:
	(export M4PATH=$(CHINOOK_ROOT)/ChinookServer/inst/scripts; m4 -E index.pre > index.html)
	R -f runTest.R

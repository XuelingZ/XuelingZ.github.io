export default function Landing() {
  return (
    <div>
      <div className="wrapper">
      <p style={{"fontSize": "16px"}}>  I am an Assistant Professor of  Software Engineering at the Rochester Institute of Technology (RIT).  
	I am broadly interested in software engineering, software security, and privacy. My work aims to build testing and analysis techniques for improving the quality, reliability, and trustworthiness of software applications. I earned my Ph.D. degree in Computer Science from University of Texas at San Antonio in 2021. <br/> <br/> I am looking for PhD students interested in software engineeing/securiy/privacy. If you are interested, please reach out to me via email: 
      <a href="xueling.zhang@rit.edu" 
      style={{
        "color":"#006699",
        "WebkitTransition":"all 150ms ease-in-out",
        "MozTransition":"all 150ms ease-in-out",
        "MsTransition":"all 150ms ease-in-out",
        "OTransition":"all 150ms ease-in-out",
        "transition":"all 150ms ease-in-out",
        "textDecoration":"none !important"}}>
      xueling.zhang@rit.edu
      </a>
      </p>

      </div>
      <div className="wrapper">
  <h2>Updates</h2>
  <div className="notetext">
    <p className="homelist">
      01/2025: Many thanks to NSF for supporting our research on Automated Testing of Augmented Reality Apps!
      06/2024: One paper accepted to ISSTA. <br />
      04/2024: <i class="fa fa-trophy"></i> I am honored to have received an NSF CRII Award.<br/>
      09/2022: One paper accepted to TOSEM.<br />
      08/2022: Two papers accepted to ASE 2022.
      {/*12/2021: <i class="fa fa-trophy"></i> My PhD student Alan Romano has won a UB CSE Best Graduate Research Award. Congratulations to Alan!<br/>
			12/2021: One paper accepted to S&P 2022.<br/>
			08/2021: One paper accepted to IMC 2021.<br/>
			12/2021: One paper accepted to ICSE 2022.<br/>
			07/2021: One paper accepted to ASE 2021.<br/>
			01/2021: <i class="fa fa-trophy"></i> I am honored to have received an NSF CAREER Award.<br/>
			12/2020: One paper accepted to ICSE 2021.<br/>
			09/2020: One paper accepted to NDSS 2021.<br/>*/}
    </p>
  </div>
  {/*
	<h2>Note</h2>
	<div class="notetext">
		<p class="homelist">
			<font color="#DC143C">
				I am looking for self-motivated Ph.D. students, undergraduate researchers, and visitors who are interested in software testing. 
				Please send me an email if you are interested in working in my group, and attach a CV to your email. 
			</font>
		</p>
	</div>
	*/}
</div>

    </div>
  )
}

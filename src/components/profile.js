

export default function Profile() {
    return (
        <div className="container profile mx-auto">
       
       <div className="profile-image">
		<img src="/profile.png" className="profile-image-border"/>
	  </div>
	  <div className="profile-description">
	    <div style={{"display":"table-cell","height":"210px","verticalAlign":"middle"}}>
			<p>
				</p><h2><strong>Xueling Zhang</strong></h2>
			<p></p>
			<p>
            Assistant Professor<br/>
            Department of Software Engineering<br/>
            Golisano College of Computing and Information Sciences
			</p>
			<p>
				</p><hr style={{"borderTop":"1px dashed #8c8b8b","borderBottom":"1px dashed #fff"}} />
			<p></p>
			<p>
				<i className="fa fa-map-marker"></i> GOL 1527, 20 Lomb Memorial Drive, Rochester, NY 14623<br/>
				<i className="fa fa-envelope-o"></i> xueling.zhang /at/ rit.edu
			</p>
		</div>
        
	</div>
      </div>
    )
  }
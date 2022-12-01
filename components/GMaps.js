import React from 'react'

export default function GMaps() {
  return (
    <div className="mapouter">
    <div className="gmap_canvas">
      <iframe
        className="gmap_iframe"
        width="100%"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Namdar Sk. No:2 Yunus Emre, 34791 Sancaktepe/İstanbul&t=&z=14&ie=UTF8&iwloc=B&output=embed"
      />
      <a href="https://piratebay-proxys.com/">Piratebay</a>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html:
          ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}"
      }}
    />
  </div>

  )
}

function mapinit(id) {
	
	var projection = new ol.proj.Projection({
			code:'EPSG:4326',
			units:'degrees'
		});
		
	var map = new ol.Map({
		target: id,
		layers: [
			
		],
		
		view: new ol.View({
			projection:projection,
			center: ([120.16,30.17]),
			maxZoom:15,
			minZoom:7,
			zoom: 14,
		})
	})
	var tdtimglayer = new ol.layer.Tile({
		title : '天地图矢量',
		source: new ol.source.XYZ({
			url: "http://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=832bbac21c24dedbcb9c47178c3db845",
			wrapX: false
		})
	});
	var tdtcvalayer = new ol.layer.Tile({
		title : '天地图矢量注记',
		source: new ol.source.XYZ({
			url: "http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=832bbac21c24dedbcb9c47178c3db845",
			wrapX: false
		})
	});
	map.addLayer(tdtimglayer)
	map.addLayer(tdtcvalayer)
	// 添加控件
	map.addControl(new ol.control.ZoomSlider());
	// 缩放控件
	map.addControl(new ol.control.Zoom({
		zoomInTipLabel: '放大',
		zoomOutTipLabel: '缩小'
	}));
	map.addControl(new ol.control.ScaleLine());
	map.addControl(new ol.control.ZoomToExtent());
	map.addControl(new ol.control.FullScreen());
	// 全图显示
	var ZoomToEx = new ol.control.ZoomToExtent({
		tipLabbel: '初始区域',
		extent: [105.56012225, 19.271837234375, 122.08355975, 27.291856765625],
	})
	map.addControl(ZoomToEx);
	
	var mousePositionCtrl = new ol.control.MousePosition({
		coordinateFormat:ol.coordinate.createStringXY(4),
		projection:'EPSG:4326',
		className:'custom-mouse-position',
		target:"mouse-position"
	})
	map.addControl(mousePositionCtrl)
	
	var overViewmap = new ol.control.OverviewMap({
		layers:[
			new ol.layer.Tile({
				source: new ol.source.XYZ({
					url: "http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=832bbac21c24dedbcb9c47178c3db845",
					wrapX: false
				})
			}),
			new ol.layer.Tile({
				source: new ol.source.XYZ({
					url: "http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=832bbac21c24dedbcb9c47178c3db845",
					wrapX: false
				})
			})
		],
		collapsed:false
	})
	map.addControl(overViewmap)
	

	return map
}
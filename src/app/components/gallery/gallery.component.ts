import { Component, Input, OnInit } from '@angular/core';
import { Gallery, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() public listUrlsImgs?: string[];

  public galleryId: string = 'gallery1';
  public items!: ImageItem[];

  constructor(private gallery: Gallery) {}

  ngOnInit(): void {
    if (this.listUrlsImgs) {
      this.items = this.listUrlsImgs.map((url) => {
        return new ImageItem({ src: url, thumb: url });
      });
    }

    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
}
